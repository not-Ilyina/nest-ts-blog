import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  username: string;
  @Column({ type: 'varchar', length: 255 })
  password: string;
  @Column({ nullable: true })
  email: string;
  @CreateDateColumn({ type: 'timestamp', name: 'create_time' })
  ctime: Date;
  @UpdateDateColumn({ type: 'timestamp', name: 'update_time' })
  mtime: Date;
}
