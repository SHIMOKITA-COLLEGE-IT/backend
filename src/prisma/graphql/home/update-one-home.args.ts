import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeUpdateInput } from './home-update.input';
import { Type } from 'class-transformer';
import { HomeWhereUniqueInput } from './home-where-unique.input';

@ArgsType()
export class UpdateOneHomeArgs {

    @Field(() => HomeUpdateInput, {nullable:false})
    @Type(() => HomeUpdateInput)
    data!: HomeUpdateInput;

    @Field(() => HomeWhereUniqueInput, {nullable:false})
    @Type(() => HomeWhereUniqueInput)
    where!: HomeWhereUniqueInput;
}
