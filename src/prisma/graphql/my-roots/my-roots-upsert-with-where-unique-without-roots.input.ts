import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsWhereUniqueInput } from './my-roots-where-unique.input';
import { Type } from 'class-transformer';
import { MyRootsUpdateWithoutRootsInput } from './my-roots-update-without-roots.input';
import { MyRootsCreateWithoutRootsInput } from './my-roots-create-without-roots.input';

@InputType()
export class MyRootsUpsertWithWhereUniqueWithoutRootsInput {

    @Field(() => MyRootsWhereUniqueInput, {nullable:false})
    @Type(() => MyRootsWhereUniqueInput)
    where!: MyRootsWhereUniqueInput;

    @Field(() => MyRootsUpdateWithoutRootsInput, {nullable:false})
    @Type(() => MyRootsUpdateWithoutRootsInput)
    update!: MyRootsUpdateWithoutRootsInput;

    @Field(() => MyRootsCreateWithoutRootsInput, {nullable:false})
    @Type(() => MyRootsCreateWithoutRootsInput)
    create!: MyRootsCreateWithoutRootsInput;
}
