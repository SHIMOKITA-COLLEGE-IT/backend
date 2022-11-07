import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RootsWhereUniqueInput } from './roots-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRootsArgs {

    @Field(() => RootsWhereUniqueInput, {nullable:false})
    @Type(() => RootsWhereUniqueInput)
    where!: RootsWhereUniqueInput;
}
