import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255 })
  title: string;
  @Column({ type: 'varchar', length: 255 }) // win 因为使用 GBK 所以会乱码，MySQL 默认使用 utf8
  sub_title: string;
  @Column({ type: 'varchar', length: 10000 })
  content: string;
  @Column({ type: 'int', default: 0 })
  like: number;
  @Column({ type: 'int', default: 0 })
  read: number;
  @Column({ type: 'int', default: 0 })
  @Column({ type: 'int', default: 0 })
  comment: number;
  collection: number;
  @Column({ type: 'varchar', length: 255 })
  img: string;
  @Column({ type: 'varchar', length: 255 })
  author: string;
  @CreateDateColumn({ type: 'timestamp', name: 'create_time' })
  ctime: Date;
  @UpdateDateColumn({ type: 'timestamp', name: 'update_time' })
  mtime: Date;
}
