// Caneló Calculator JavaScript

class CaneloCalculator {
    constructor() {
        this.items = [];
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
    }

    addItem(type, calories) {
        const item = {
            id: Date.now(),
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

        itemsList.innerHTML = this.items.map(item => `
            <div class="item-row ${item.type}" data-id="${item.id}">
                <div class="item-info">
                    <div class="item-icon">${icons[item.type]}</div>
                    <div class="item-details">
                        <span class="item-name">${names[item.type]}</span>
                        <span class="item-calories">${item.calories} calories</span>
                    </div>
                </div>
                <button class="remove-btn" onclick="calculator.removeItem(${item.id})">Remove</button>
            </div>
        `).join('');
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
