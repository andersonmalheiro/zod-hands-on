import { fetchRandomPerson } from './external-api';

describe('External API', () => {
    it('should return the data', async () => {
        const result = await fetchRandomPerson();

        expect(result).toBeTruthy();
    });
});