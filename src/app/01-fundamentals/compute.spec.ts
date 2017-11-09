import { compute } from "./compute";



describe('compute', ()=>{
    it('should return 0 if input is negative', ()=>{
        const result = compute(-1);
        expect(result).toEqual(0);
    });

    it('should increment the provided number by one', ()=>{
        const result = compute(1);
        expect(result).toEqual(2);
    });
});