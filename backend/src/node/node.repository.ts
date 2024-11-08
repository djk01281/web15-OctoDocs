import { DataSource, Repository } from 'typeorm';
import { Node } from './node.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NodeRepository extends Repository<Node> {
  constructor(private dataSource: DataSource) {
    super(Node, dataSource.createEntityManager());
  }
}
