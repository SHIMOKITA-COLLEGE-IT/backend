import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCreateWithoutClubsInput } from './photo-create-without-clubs.input';
import { Type } from 'class-transformer';
import { PhotoCreateOrConnectWithoutClubsInput } from './photo-create-or-connect-without-clubs.input';
import { PhotoWhereUniqueInput } from './photo-where-unique.input';

@InputType()
export class PhotoCreateNestedManyWithoutClubsInput {

    @Field(() => [PhotoCreateWithoutClubsInput], {nullable:true})
    @Type(() => PhotoCreateWithoutClubsInput)
    create?: Array<PhotoCreateWithoutClubsInput>;

    @Field(() => [PhotoCreateOrConnectWithoutClubsInput], {nullable:true})
    @Type(() => PhotoCreateOrConnectWithoutClubsInput)
    connectOrCreate?: Array<PhotoCreateOrConnectWithoutClubsInput>;

    @Field(() => [PhotoWhereUniqueInput], {nullable:true})
    @Type(() => PhotoWhereUniqueInput)
    connect?: Array<PhotoWhereUniqueInput>;
}
