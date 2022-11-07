import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MySkillsWhereUniqueInput } from './my-skills-where-unique.input';
import { Type } from 'class-transformer';
import { MySkillsUpdateWithoutMyRootsInput } from './my-skills-update-without-my-roots.input';
import { MySkillsCreateWithoutMyRootsInput } from './my-skills-create-without-my-roots.input';

@InputType()
export class MySkillsUpsertWithWhereUniqueWithoutMyRootsInput {

    @Field(() => MySkillsWhereUniqueInput, {nullable:false})
    @Type(() => MySkillsWhereUniqueInput)
    where!: MySkillsWhereUniqueInput;

    @Field(() => MySkillsUpdateWithoutMyRootsInput, {nullable:false})
    @Type(() => MySkillsUpdateWithoutMyRootsInput)
    update!: MySkillsUpdateWithoutMyRootsInput;

    @Field(() => MySkillsCreateWithoutMyRootsInput, {nullable:false})
    @Type(() => MySkillsCreateWithoutMyRootsInput)
    create!: MySkillsCreateWithoutMyRootsInput;
}
