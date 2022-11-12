import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { SkillRelationFilter } from '../skill/skill-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRootsTracingRelationFilter } from '../user-roots-tracing/user-roots-tracing-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class UserSkillAcquisitionWhereInput {

    @Field(() => [UserSkillAcquisitionWhereInput], {nullable:true})
    AND?: Array<UserSkillAcquisitionWhereInput>;

    @Field(() => [UserSkillAcquisitionWhereInput], {nullable:true})
    OR?: Array<UserSkillAcquisitionWhereInput>;

    @Field(() => [UserSkillAcquisitionWhereInput], {nullable:true})
    NOT?: Array<UserSkillAcquisitionWhereInput>;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => SkillRelationFilter, {nullable:true})
    skill?: SkillRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    skillId?: IntFilter;

    @Field(() => UserRootsTracingRelationFilter, {nullable:true})
    userRootsTracing?: UserRootsTracingRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    rootsId?: IntNullableFilter;
}
