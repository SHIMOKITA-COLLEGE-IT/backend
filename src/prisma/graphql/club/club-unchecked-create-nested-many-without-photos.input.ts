import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClubCreateWithoutPhotosInput } from './club-create-without-photos.input';
import { Type } from 'class-transformer';
import { ClubCreateOrConnectWithoutPhotosInput } from './club-create-or-connect-without-photos.input';
import { ClubWhereUniqueInput } from './club-where-unique.input';

@InputType()
export class ClubUncheckedCreateNestedManyWithoutPhotosInput {

    @Field(() => [ClubCreateWithoutPhotosInput], {nullable:true})
    @Type(() => ClubCreateWithoutPhotosInput)
    create?: Array<ClubCreateWithoutPhotosInput>;

    @Field(() => [ClubCreateOrConnectWithoutPhotosInput], {nullable:true})
    @Type(() => ClubCreateOrConnectWithoutPhotosInput)
    connectOrCreate?: Array<ClubCreateOrConnectWithoutPhotosInput>;

    @Field(() => [ClubWhereUniqueInput], {nullable:true})
    @Type(() => ClubWhereUniqueInput)
    connect?: Array<ClubWhereUniqueInput>;
}
