import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsWhereUniqueInput } from './my-roots-where-unique.input';
import { Type } from 'class-transformer';
import { MyRootsUpdateWithoutProfileInput } from './my-roots-update-without-profile.input';

@InputType()
export class MyRootsUpdateWithWhereUniqueWithoutProfileInput {

    @Field(() => MyRootsWhereUniqueInput, {nullable:false})
    @Type(() => MyRootsWhereUniqueInput)
    where!: MyRootsWhereUniqueInput;

    @Field(() => MyRootsUpdateWithoutProfileInput, {nullable:false})
    @Type(() => MyRootsUpdateWithoutProfileInput)
    data!: MyRootsUpdateWithoutProfileInput;
}
