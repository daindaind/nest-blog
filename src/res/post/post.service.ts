import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  async postMainPage(): Promise<string> {
    return 'Post Main Page';
  }
}
