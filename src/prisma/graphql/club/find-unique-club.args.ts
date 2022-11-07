import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueClubArgs {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    @Type(() => ClubWhereUniqueInput)
    where!: ClubWhereUniqueInput;
}
