function VigenèreCipher(key, abc) {
    this.encode = (str) => {
        let enStr = '';
        for (let n in str) {
            let b = str[n];
            let f = key[n % key.length];
            enStr += abc.indexOf(b) >= 0 ? abc[(abc.indexOf(b) + abc.indexOf(f)) % abc.length] : b;
        }
        return enStr;
    };
    
    this.decode = (str) => {
        let deStr = '';
        for (let n in str) {
            let q = str[n];
            let p = key[n % key.length];
            deStr += abc.indexOf(q) >= 0 ? abc[(abc.indexOf(q) + abc.length - abc.indexOf(p)) % abc.length] : q;
        }
        return deStr;
    };
}
  //by aziz ammar