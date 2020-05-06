import { Entity,  Column, OneToMany, PrimaryColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'
import Product from './Product';

@Entity()
class Store {

    @PrimaryColumn('uuid', { generated: 'uuid' })
    id:string;

    @Column({type:"varchar", length:50})
    name:string;
 
    @Column({type:"text"})
    description:string;

    @OneToMany(()=>Product, product=>product.store)
    products:Product[];


    @CreateDateColumn({type: "timestamp"})
    createdAt: Date;

    @UpdateDateColumn({type: "timestamp"})
    updatedAt: Date;

    
}

export default Store;

