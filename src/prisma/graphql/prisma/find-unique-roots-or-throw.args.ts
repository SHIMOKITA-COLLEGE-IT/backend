import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RootsWhereUniqueInput } from '../roots/roots-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRootsOrThrowArgs {

    @Field(() => RootsWhereUniqueInput, {nullable:false})
    @Type(() => RootsWhereUniqueInput)
    where!: RootsWhereUniqueInput;
}
