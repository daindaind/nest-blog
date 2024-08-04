import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PostService } from './post.service';

type TPostList = {
  nowPage: string;
  pageCount: string;
};

export type TPost = {
  id: number;
  title: string;
  content: string;
};

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // @Post()
  // async postMainPage(): Promise<string> {
  //   const res = await this.postService.postMainPage();

  //   return res;
  // }

  @Post()
  async postContent(@Body() post: any): Promise<any> {
    return {
      title: post.title,
      content: post.content,
    };
  }

  @Get('/list')
  async getPostList(
    @Query('nowPage') nowPage: string,
    @Query('pageCount') pageCount: string,
  ): Promise<TPostList> {
    return {
      nowPage,
      pageCount,
    };
  }

  @Get('/:id')
  async getPostById(@Param('id') id: string): Promise<TPost> {
    const res = await this.postService.postData();

    const post = res.filter((value) => value.id === parseInt(id));
    return post[0];
  }
}
