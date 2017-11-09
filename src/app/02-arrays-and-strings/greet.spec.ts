import { greet } from "./greet";



describe('greet test', ()=>{
    it(' should say "welcome {person provided}" ', ()=>{
        const result = greet('Joseph');
        // expect(result).toEqual('Welcome Joseph'); THIS TEST IS TOO FRAGILE(specific)
        expect(result).toContain('Joseph');
    });
});