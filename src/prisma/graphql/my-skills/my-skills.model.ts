import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';
import { Int } from '@nestjs/graphql';
import { Skill } from '../skill/skill.model';
import { MyRoots } from '../my-roots/my-roots.model';

@ObjectType()
export class MySkills {

    @Field(() => Profile, {nullable:false})
    profile?: Profile;

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => Skill, {nullable:false})
    skill?: Skill;

    @Field(() => Int, {nullable:false})
    skillId!: number;

    @Field(() => MyRoots, {nullable:true})
    myRoots?: MyRoots | null;

    @Field(() => Int, {nullable:true})
    myRootsId!: number | null;
}
