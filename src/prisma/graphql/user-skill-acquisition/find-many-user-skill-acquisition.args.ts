import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSkillAcquisitionWhereInput } from './user-skill-acquisition-where.input';
import { Type } from 'class-transformer';
import { UserSkillAcquisitionOrderByWithRelationInput } from './user-skill-acquisition-order-by-with-relation.input';
import { UserSkillAcquisitionWhereUniqueInput } from './user-skill-acquisition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserSkillAcquisitionScalarFieldEnum } from './user-skill-acquisition-scalar-field.enum';

@ArgsType()
export class FindManyUserSkillAcquisitionArgs {

    @Field(() => UserSkillAcquisitionWhereInput, {nullable:true})
    @Type(() => UserSkillAcquisitionWhereInput)
    where?: UserSkillAcquisitionWhereInput;

    @Field(() => [UserSkillAcquisitionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserSkillAcquisitionOrderByWithRelationInput>;

    @Field(() => UserSkillAcquisitionWhereUniqueInput, {nullable:true})
    cursor?: UserSkillAcquisitionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserSkillAcquisitionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserSkillAcquisitionScalarFieldEnum>;
}
