import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsWhereUniqueInput } from './my-roots-where-unique.input';
import { Type } from 'class-transformer';
import { MyRootsUpdateWithoutProfileInput } from './my-roots-update-without-profile.input';
import { MyRootsCreateWithoutProfileInput } from './my-roots-create-without-profile.input';

@InputType()
export class MyRootsUpsertWithWhereUniqueWithoutProfileInput {

    @Field(() => MyRootsWhereUniqueInput, {nullable:false})
    @Type(() => MyRootsWhereUniqueInput)
    where!: MyRootsWhereUniqueInput;

    @Field(() => MyRootsUpdateWithoutProfileInput, {nullable:false})
    @Type(() => MyRootsUpdateWithoutProfileInput)
    update!: MyRootsUpdateWithoutProfileInput;

    @Field(() => MyRootsCreateWithoutProfileInput, {nullable:false})
    @Type(() => MyRootsCreateWithoutProfileInput)
    create!: MyRootsCreateWithoutProfileInput;
}
