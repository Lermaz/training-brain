function maskPII(s: string): string {
    const n = s.length;
    let res = "";

    if (n >= 8 && n <= 40 && s.includes('@') && s.includes('.')) {
        let name = s.substring(0,s.indexOf('@')).toLowerCase();
        let maskedName = name[0];
        for (let i = 1; i <= 6; i++) {
            maskedName += i < 6 ? '*' : name[name.length - 1]; 
        }
        let maskedDomain = s.substring(name.length ,s.indexOf('.')).toLowerCase();


        res = maskedName + maskedDomain + s.substring(s.indexOf('.')).toLowerCase();
    }

    if (n >= 10 && n <= 20) {
        let maskedPhone = s.replace(/\D/g, '')
        let maskedCountryCode = "";

        switch (maskedPhone.length - 10) {
            case 1:
                maskedCountryCode = "+*-***-***-";
                break;
            case 2:
                maskedCountryCode = "+**-***-***-";
                break;
            case 3:
                maskedCountryCode = "+***-***-***-";
                break;
            default:
                maskedCountryCode = '***-***-';
                break;
        }
            
        res = maskedCountryCode + maskedPhone.substring(maskedPhone.length - 4);
    }

    return res
};

const s: string = "+(501321)-50-23431";
// "+***-***-***-3431"
console.log("Result:", maskPII(s));