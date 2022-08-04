import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateCommentDto {
    
    @IsInt()
    @IsNotEmpty()
    book_id: number;

    @IsString()
    @IsNotEmpty()
    commenter_ip_address: string;
    
}
