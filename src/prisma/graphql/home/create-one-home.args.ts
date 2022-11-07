import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeCreateInput } from './home-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHomeArgs {

    @Field(() => HomeCreateInput, {nullable:false})
    @Type(() => HomeCreateInput)
    data!: HomeCreateInput;
}
