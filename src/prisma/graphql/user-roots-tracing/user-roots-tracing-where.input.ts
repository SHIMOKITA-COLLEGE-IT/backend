import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RootsRelationFilter } from '../roots/roots-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserSkillAcquisitionListRelationFilter } from '../user-skill-acquisition/user-skill-acquisition-list-relation-filter.input';

@InputType()
export class UserRootsTracingWhereInput {

    @Field(() => [UserRootsTracingWhereInput], {nullable:true})
    AND?: Array<UserRootsTracingWhereInput>;

    @Field(() => [UserRootsTracingWhereInput], {nullable:true})
    OR?: Array<UserRootsTracingWhereInput>;

    @Field(() => [UserRootsTracingWhereInput], {nullable:true})
    NOT?: Array<UserRootsTracingWhereInput>;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => RootsRelationFilter, {nullable:true})
    roots?: RootsRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    rootsId?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    from?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    to?: DateTimeNullableFilter;

    @Field(() => UserSkillAcquisitionListRelationFilter, {nullable:true})
    userSkillAcquisitions?: UserSkillAcquisitionListRelationFilter;
}
