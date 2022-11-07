import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeCreateWithoutPhotosInput } from './home-create-without-photos.input';
import { Type } from 'class-transformer';
import { HomeCreateOrConnectWithoutPhotosInput } from './home-create-or-connect-without-photos.input';
import { HomeWhereUniqueInput } from './home-where-unique.input';

@InputType()
export class HomeCreateNestedManyWithoutPhotosInput {

    @Field(() => [HomeCreateWithoutPhotosInput], {nullable:true})
    @Type(() => HomeCreateWithoutPhotosInput)
    create?: Array<HomeCreateWithoutPhotosInput>;

    @Field(() => [HomeCreateOrConnectWithoutPhotosInput], {nullable:true})
    @Type(() => HomeCreateOrConnectWithoutPhotosInput)
    connectOrCreate?: Array<HomeCreateOrConnectWithoutPhotosInput>;

    @Field(() => [HomeWhereUniqueInput], {nullable:true})
    @Type(() => HomeWhereUniqueInput)
    connect?: Array<HomeWhereUniqueInput>;
}
