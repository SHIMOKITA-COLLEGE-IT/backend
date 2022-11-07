import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RootsWhereInput } from './roots-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRootsArgs {

    @Field(() => RootsWhereInput, {nullable:true})
    @Type(() => RootsWhereInput)
    where?: RootsWhereInput;
}
