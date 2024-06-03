import { Controller, UseGuards, Get, Post, Put, Delete, Param } from "@nestjs/common";
import { JwtGuard } from "src/auth/guard";
import { BookmarkService } from "./bookmark.service";
import { GetUser } from "src/auth/decorator";


@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {

    constructor(private bookmarkService: BookmarkService) {

    }




    @Get()
    getBookmarks(@GetUser('id') userId: number) { }


    @Get(':id')
    getBookmarksById(
        @GetUser('id') userId: number,
        @Param('id') bookmarkId: number) { }

    @Put()
    editBookmarksById(@GetUser('id') userId: number) { }


    @Delete()
    deleteBookmarksById(@GetUser('id') userId: number) { }


    @Post()
    createBookmark() {

    }
}