import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeWhereInput } from './home-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHomeArgs {

    @Field(() => HomeWhereInput, {nullable:true})
    @Type(() => HomeWhereInput)
    where?: HomeWhereInput;
}
