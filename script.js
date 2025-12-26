// Caneló Calculator JavaScript

class CaneloCalculator {
    constructor() {
        this.items = [];
        this.nextId = 1; // Counter for unique IDs
        this.initializeEventListeners();
        this.updateDisplay();
    }

    initializeEventListeners() {
        // Add button listeners
        const addButtons = document.querySelectorAll('.add-btn');
        addButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const type = btn.getAttribute('data-type');
                const calories = parseInt(btn.getAttribute('data-calories'));
                this.addItem(type, calories);
            });
        });

        // Clear button listener
        const clearBtn = document.getElementById('clearBtn');
        clearBtn.addEventListener('click', () => {
            this.clearAll();
        });

        // Event delegation for remove buttons
        const itemsList = document.getElementById('itemsList');
        itemsList.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-btn')) {
                const id = parseInt(e.target.getAttribute('data-id'));
                this.removeItem(id);
            }
        });
    }

    addItem(type, calories) {
        const item = {
            id: this.nextId++,
            type: type,
            calories: calories
        };
        this.items.push(item);
        this.updateDisplay();
        this.animateAdd();
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.updateDisplay();
    }

    clearAll() {
        if (this.items.length === 0) return;
        
        if (confirm('Are you sure you want to clear all canelons?')) {
            this.items = [];
            this.updateDisplay();
        }
    }

    updateDisplay() {
        this.updateItemsList();
        this.updateTotals();
        this.updateClearButton();
    }

    updateItemsList() {
        const itemsList = document.getElementById('itemsList');
        
        if (this.items.length === 0) {
            itemsList.innerHTML = '<p class="empty-message">No canelons added yet. Start adding some delicious ones!</p>';
            return;
        }

        const icons = {
            meat: '🥩',
            fish: '🐟',
            vegetable: '🥬'
        };

        const names = {
            meat: 'Meat Canelons',
            fish: 'Fish Canelons',
            vegetable: 'Vegetable Canelons'
        };

        // Clear the list
        itemsList.innerHTML = '';

        // Create DOM elements for each item
        this.items.forEach(item => {
            const itemRow = document.createElement('div');
            itemRow.className = `item-row ${item.type}`;
            itemRow.setAttribute('data-id', item.id);

            const itemInfo = document.createElement('div');
            itemInfo.className = 'item-info';

            const itemIcon = document.createElement('div');
            itemIcon.className = 'item-icon';
            itemIcon.textContent = icons[item.type];

            const itemDetails = document.createElement('div');
            itemDetails.className = 'item-details';

            const itemName = document.createElement('span');
            itemName.className = 'item-name';
            itemName.textContent = names[item.type];

            const itemCalories = document.createElement('span');
            itemCalories.className = 'item-calories';
            itemCalories.textContent = `${item.calories} calories`;

            itemDetails.appendChild(itemName);
            itemDetails.appendChild(itemCalories);

            itemInfo.appendChild(itemIcon);
            itemInfo.appendChild(itemDetails);

            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-btn';
            removeBtn.textContent = 'Remove';
            removeBtn.setAttribute('data-id', item.id);

            itemRow.appendChild(itemInfo);
            itemRow.appendChild(removeBtn);

            itemsList.appendChild(itemRow);
        });
    }

    updateTotals() {
        const totalCount = this.items.length;
        const totalCalories = this.items.reduce((sum, item) => sum + item.calories, 0);

        document.getElementById('totalCount').textContent = totalCount;
        document.getElementById('totalCalories').textContent = `${totalCalories} cal`;
    }

    updateClearButton() {
        const clearBtn = document.getElementById('clearBtn');
        clearBtn.disabled = this.items.length === 0;
    }

    animateAdd() {
        // Add a subtle animation feedback
        const itemsList = document.getElementById('itemsList');
        itemsList.style.transform = 'scale(1.02)';
        setTimeout(() => {
            itemsList.style.transform = 'scale(1)';
        }, 200);
    }
}

// Initialize calculator when page loads
let calculator;
document.addEventListener('DOMContentLoaded', () => {
    calculator = new CaneloCalculator();
});
