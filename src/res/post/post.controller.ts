import { Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async postMainPage(): Promise<string> {
    const res = await this.postService.postMainPage();

    return res;
  }
}
