import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';
import { Type } from 'class-transformer';
import { PhotoCreateWithoutClubsInput } from './photo-create-without-clubs.input';

@InputType()
export class PhotoCreateOrConnectWithoutClubsInput {

    @Field(() => PhotoWhereUniqueInput, {nullable:false})
    @Type(() => PhotoWhereUniqueInput)
    where!: PhotoWhereUniqueInput;

    @Field(() => PhotoCreateWithoutClubsInput, {nullable:false})
    @Type(() => PhotoCreateWithoutClubsInput)
    create!: PhotoCreateWithoutClubsInput;
}
