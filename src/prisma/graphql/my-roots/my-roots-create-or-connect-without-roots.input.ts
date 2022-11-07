import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsWhereUniqueInput } from './my-roots-where-unique.input';
import { Type } from 'class-transformer';
import { MyRootsCreateWithoutRootsInput } from './my-roots-create-without-roots.input';

@InputType()
export class MyRootsCreateOrConnectWithoutRootsInput {

    @Field(() => MyRootsWhereUniqueInput, {nullable:false})
    @Type(() => MyRootsWhereUniqueInput)
    where!: MyRootsWhereUniqueInput;

    @Field(() => MyRootsCreateWithoutRootsInput, {nullable:false})
    @Type(() => MyRootsCreateWithoutRootsInput)
    create!: MyRootsCreateWithoutRootsInput;
}
