import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Article {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  title: string;
  @CreateDateColumn({ type: 'timestamp', name: 'create_time' })
  createTime: Date;
  @UpdateDateColumn({ type: 'timestamp', name: 'update_time' })
  updateTime: Date;
}
