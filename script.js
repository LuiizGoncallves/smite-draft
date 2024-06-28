document.addEventListener('DOMContentLoaded', function() {
    const godsListElement = document.getElementById('gods-list');
    const searchBar = document.getElementById('search-bar');
    const tagsContainer = document.querySelector('.tags-container');
    let activeRole = 'All';

    const team1Picks = [
        document.getElementById('team1-pick1'),
        document.getElementById('team1-pick2'),
        document.getElementById('team1-pick3'),
        document.getElementById('team1-pick4'),
        document.getElementById('team1-pick5')
    ];
    const team2Picks = [
        document.getElementById('team2-pick1'),
        document.getElementById('team2-pick2'),
        document.getElementById('team2-pick3'),
        document.getElementById('team2-pick4'),
        document.getElementById('team2-pick5')
    ];
    const team1Bans = [
        document.getElementById('team1-ban1'),
        document.getElementById('team1-ban2'),
        document.getElementById('team1-ban3'),
        document.getElementById('team1-ban4'),
        document.getElementById('team1-ban5')
    ];
    const team2Bans = [
        document.getElementById('team2-ban1'),
        document.getElementById('team2-ban2'),
        document.getElementById('team2-ban3'),
        document.getElementById('team2-ban4'),
        document.getElementById('team2-ban5')
    ];

    const team1Action = document.getElementById('team1-action');
    const team2Action = document.getElementById('team2-action');

    const teams = [
        { name: 'Team 1', picks: team1Picks, bans: team1Bans, actionElement: team1Action },
        { name: 'Team 2', picks: team2Picks, bans: team2Bans, actionElement: team2Action }
    ];

    let currentTurn = 0;
    let actionIndex = 0;
    const actions = [
        'ban', 'ban', 'ban', 'ban', 'ban', 'ban', 
        'pick', 'pick', 'pick', 'pick', 'pick', 'pick', 
        'ban', 'ban', 'ban', 'ban', 
        'pick', 'pick', 'pick', 'pick'
    ];

    const turnOrder = [
        0, 1, 0, 1, 0, 1, 
        0, 1, 1, 0, 0, 1, 
        0, 1, 0, 1, 
        0, 1, 1, 0
    ];

    function updateActionIndicators() {
        const currentTeam = teams[turnOrder[actionIndex]];
        if (!currentTeam) return;

        currentTeam.actionElement.textContent = `Action: ${actions[actionIndex] === 'ban' ? 'Banning' : 'Picking'}`;
        teams.forEach(team => {
            if (team !== currentTeam) {
                team.actionElement.textContent = '';
            }
        });
    }

    function createGodCard(god) {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'god-card-container';
        const card = document.createElement('div');
        card.className = 'god-card';
        card.innerHTML = `
            <img src="${god.photo}" alt="${god.godName}">
            <h5 class="god-name">${god.godName}</h5>
        `;
        card.addEventListener('click', () => handleBanPick(god, card));
        cardContainer.appendChild(card);
        return cardContainer;
    }

    function handleBanPick(god, card) {
        const action = actions[actionIndex];
        const team = teams[turnOrder[actionIndex]];

        if (action === 'ban') {
            const banSlot = team.bans[team.bans.filter(ban => ban.innerHTML !== '').length];
            banSlot.innerHTML = `<img src="${god.photo}" alt="${god.godName}" style="width: 52px; height: 52px; object-fit: cover; object-position: top; border-radius: 5px;">`;
            banSlot.style.pointerEvents = 'none';
        } else if (action === 'pick') {
            const pickSlot = team.picks[team.picks.filter(pick => pick.innerHTML !== '').length];
            pickSlot.innerHTML = `
                <img src="${god.photo}" alt="${god.godName}" style="width: 64px; height: 64px; object-fit: cover; object-position: top; border-radius: 5px;">
                <h5>${god.godName}</h5>
            `;
            pickSlot.style.pointerEvents = 'none';
            pickSlot.style.display = 'flex';
            pickSlot.style.alignItems = 'center';
        }

        actionIndex++;
        currentTurn++;

        card.classList.add('disabled');
        card.style.pointerEvents = 'none';

        updateActionIndicators();
        updateGodList();
    }

    function updateGodList() {
        godsListElement.innerHTML = '';
        const filteredGods = gods.filter(god => {
            const isNotBannedOrPicked = !teams[0].bans.some(ban => ban.innerHTML.includes(god.photo)) &&
                                         !teams[1].bans.some(ban => ban.innerHTML.includes(god.photo)) &&
                                         !teams[0].picks.some(pick => pick.innerHTML.includes(god.photo)) &&
                                         !teams[1].picks.some(pick => pick.innerHTML.includes(god.photo));
            const matchesRole = activeRole === 'All' || god.role.includes(activeRole);
            const matchesSearch = god.godName.toLowerCase().includes(searchBar.value.toLowerCase());
            return isNotBannedOrPicked && matchesRole && matchesSearch;
        });

        filteredGods.forEach(god => {
            godsListElement.appendChild(createGodCard(god));
        });
    }

    tagsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            document.querySelectorAll('.tag').forEach(tag => tag.classList.remove('active'));
            e.target.classList.add('active');
            activeRole = e.target.dataset.role;
            updateGodList();
        }
    });

    searchBar.addEventListener('input', updateGodList);

    updateActionIndicators();
    updateGodList();

    window.resetDraft = function() {
        document.querySelectorAll('.ban-pick-slot').forEach(slot => {
            slot.innerHTML = '';
            slot.style.pointerEvents = 'auto';
        });
        document.querySelectorAll('.pick-slot').forEach(slot => {
            slot.innerHTML = '';
            slot.style.pointerEvents = 'auto';
        });
        document.querySelectorAll('.god-card').forEach(card => {
            card.classList.remove('disabled');
            card.style.pointerEvents = 'auto';
        });
        currentTurn = 0;
        actionIndex = 0;
        updateActionIndicators();
        updateGodList();
    }
});
