export class Herbe{
    constructor() { }
    
    public Famille: string;
    public Genre: string;
    public NomScientifique: string;
    public NomCommun: string;
}

export class Persil extends Herbe{
    constructor() {
        super();
        this.Famille = "Apiacées";
        this.Genre = "Petroselinum";
    }
}