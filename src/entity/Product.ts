import {BaseEntity, Entity, Column, ManyToOne, PrimaryColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

import Store from './Store';

@Entity()
class Product  {
  
    @PrimaryColumn('uuid', { generated: 'uuid' })
    id:string;

    @Column({type:"varchar", length:50})
    name:string;

    @Column({type:"text"})
    description:string;

    @Column({type:"decimal"})
    price:number;

    @Column({type:"int"})
    quantity:number;

    @ManyToOne(()=>Store, store=>store.products)
    store:Store;

    @CreateDateColumn({type: "timestamp"})
    createdAt: Date;

    @UpdateDateColumn({type: "timestamp"})
    updatedAt: Date;
}

export default Product