export const addressTypeOptions = [{ label: 'Home', value: 1 }, { label: 'Work', value: 2 }, { label: 'Vacations', value: 3 }, { label: 'Other', value: 4 }]

export const addressPlanetOptions = [{ label: 'Mars', value: 'Mars' }, { label: 'Earth', value: 'Earth' }]

export function generateRandomKey() {
    const charset =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+<>?';
    let result = '';
    for (let i = 0; i < 15; i++) {
        result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return result;
};

export function filterValue(option: number) {
    switch (option) {
        case 1:
            return 'Home';
        case 2:
            return 'Work';
        case 3:
            return 'Vacation';
        default:
            return 'Other';
    }
}