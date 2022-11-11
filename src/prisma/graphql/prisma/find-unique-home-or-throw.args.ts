import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeWhereUniqueInput } from '../home/home-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueHomeOrThrowArgs {

    @Field(() => HomeWhereUniqueInput, {nullable:false})
    @Type(() => HomeWhereUniqueInput)
    where!: HomeWhereUniqueInput;
}
