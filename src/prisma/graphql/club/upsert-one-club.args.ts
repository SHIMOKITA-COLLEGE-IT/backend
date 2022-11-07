import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClubWhereUniqueInput } from './club-where-unique.input';
import { Type } from 'class-transformer';
import { ClubCreateInput } from './club-create.input';
import { ClubUpdateInput } from './club-update.input';

@ArgsType()
export class UpsertOneClubArgs {

    @Field(() => ClubWhereUniqueInput, {nullable:false})
    @Type(() => ClubWhereUniqueInput)
    where!: ClubWhereUniqueInput;

    @Field(() => ClubCreateInput, {nullable:false})
    @Type(() => ClubCreateInput)
    create!: ClubCreateInput;

    @Field(() => ClubUpdateInput, {nullable:false})
    @Type(() => ClubUpdateInput)
    update!: ClubUpdateInput;
}
