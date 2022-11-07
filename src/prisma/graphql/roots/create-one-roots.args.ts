import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RootsCreateInput } from './roots-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRootsArgs {

    @Field(() => RootsCreateInput, {nullable:false})
    @Type(() => RootsCreateInput)
    data!: RootsCreateInput;
}
