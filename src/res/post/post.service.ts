import { Injectable } from '@nestjs/common';
import { TPost } from './post.controller';

@Injectable()
export class PostService {
  async postMainPage(): Promise<string> {
    return 'Post Main Page';
  }

  async postData(): Promise<TPost[]> {
    return [
      {
        id: 1,
        title: 'post 1',
        content: 'post 1 content',
      },
      {
        id: 2,
        title: 'post 2',
        content: 'post 2 content',
      },
      {
        id: 3,
        title: 'post 3',
        content: 'post 3 content',
      },
    ];
  }
}
