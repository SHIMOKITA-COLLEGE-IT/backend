import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeWhereUniqueInput } from './home-where-unique.input';
import { Type } from 'class-transformer';
import { HomeCreateInput } from './home-create.input';
import { HomeUpdateInput } from './home-update.input';

@ArgsType()
export class UpsertOneHomeArgs {

    @Field(() => HomeWhereUniqueInput, {nullable:false})
    @Type(() => HomeWhereUniqueInput)
    where!: HomeWhereUniqueInput;

    @Field(() => HomeCreateInput, {nullable:false})
    @Type(() => HomeCreateInput)
    create!: HomeCreateInput;

    @Field(() => HomeUpdateInput, {nullable:false})
    @Type(() => HomeUpdateInput)
    update!: HomeUpdateInput;
}
