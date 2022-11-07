import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsWhereUniqueInput } from './my-roots-where-unique.input';
import { Type } from 'class-transformer';
import { MyRootsCreateWithoutProfilesOnSkillsInput } from './my-roots-create-without-profiles-on-skills.input';

@InputType()
export class MyRootsCreateOrConnectWithoutProfilesOnSkillsInput {

    @Field(() => MyRootsWhereUniqueInput, {nullable:false})
    @Type(() => MyRootsWhereUniqueInput)
    where!: MyRootsWhereUniqueInput;

    @Field(() => MyRootsCreateWithoutProfilesOnSkillsInput, {nullable:false})
    @Type(() => MyRootsCreateWithoutProfilesOnSkillsInput)
    create!: MyRootsCreateWithoutProfilesOnSkillsInput;
}
