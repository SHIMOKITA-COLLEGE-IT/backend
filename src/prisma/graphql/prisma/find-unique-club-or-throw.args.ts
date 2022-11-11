import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from '../club/club-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueClubOrThrowArgs {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    @Type(() => ClubWhereUniqueInput)
    where!: ClubWhereUniqueInput;
}
