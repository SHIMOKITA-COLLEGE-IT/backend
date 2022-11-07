import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsWhereUniqueInput } from './my-roots-where-unique.input';
import { Type } from 'class-transformer';
import { MyRootsCreateWithoutProfileInput } from './my-roots-create-without-profile.input';

@InputType()
export class MyRootsCreateOrConnectWithoutProfileInput {

    @Field(() => MyRootsWhereUniqueInput, {nullable:false})
    @Type(() => MyRootsWhereUniqueInput)
    where!: MyRootsWhereUniqueInput;

    @Field(() => MyRootsCreateWithoutProfileInput, {nullable:false})
    @Type(() => MyRootsCreateWithoutProfileInput)
    create!: MyRootsCreateWithoutProfileInput;
}
