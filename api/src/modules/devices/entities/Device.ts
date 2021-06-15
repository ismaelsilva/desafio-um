import { Category } from "./Category";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, JoinTable, OneToMany, OneToOne } from "typeorm";

@Entity("devices")
class Device{
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  color: string;

  @Column()
  partNumber: string;

  @Column()
  idCategory: number;

  @OneToOne(() => Category, oclass => oclass.id)
  @JoinTable()
  category: Category;
}

export { Device };