import { Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

export class Comment {
    
    // id
    @PrimaryGeneratedColumn()
    id: number;

    // comments
    @CreateDateColumn({ type: 'varchar' , length: 500 })
    comments: string;

    // book_id
    @Column({ type: 'int' })
    book_id: number;

    // commenter_ip_address
    @Column({ type: 'varchar' , length: 50 })
    commenter_ip_address: string;

    // created_at
    @Column({ type: 'timestamp', default: () => 'UTC_TIMESTAMP' })
    created_at:Date
   
}
