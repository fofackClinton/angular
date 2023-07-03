import { region } from "./region.model";

export class participant
{

   public   id? : number;
   public age? :number;
   public id_region? :region;
   public  cni? : string;
   public  prenom? : string;
   public tel? : string;
   public  login? :string;
   public  mdp? : string;
  public  statut?: string;
  public email?: string;
  public etat?: string;
  public nom? : string;
}
